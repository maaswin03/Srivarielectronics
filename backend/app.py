import os
from PIL import Image

# Input and output folder
input_folder = "/Users/kyroz/Downloads/Fansee for Gallery"
output_folder = "/Users/kyroz/Downloads/updated"

# Create output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Get all images (sorted for consistent order)
images = sorted([f for f in os.listdir(input_folder) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))])

# Rename and convert images
for idx, image in enumerate(images, start=1):
    img_path = os.path.join(input_folder, image)
    output_path = os.path.join(output_folder, f"Fans{idx}.webp")

    try:
        # If the file is already .webp, just rename it
        if image.lower().endswith('.webp'):
            os.rename(img_path, output_path)
            print(f"🔄 Renamed: {image} → {output_path}")

        # Otherwise, convert and save as .webp
        else:
            with Image.open(img_path) as img:
                # Convert to RGB to avoid transparency issues
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")

                # Resize to maintain consistency (optional)
                img.thumbnail((800, 800))  # Adjust size as needed

                # Save as .webp with high quality
                img.save(output_path, "WEBP", quality=90)

            print(f"✅ Converted: {image} → {output_path}")

    except Exception as e:
        print(f"❌ Error processing {image}: {e}")

print("🎉 Process completed successfully!")
