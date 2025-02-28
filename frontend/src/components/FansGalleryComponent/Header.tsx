import { Button } from "@/components/ui/button"
import styles from "./Header.module.css"

export default function Header(){
  return (
    <div className={styles.header}>
      <h1>Explore Our Fan Gallery</h1>
      <p>Experience electrifying moments with immersive visuals</p>
      <Button className={styles.homeButton} onClick={() => window.location.href = "/"}>
        Return to Home
      </Button>
    </div>
  )
}



