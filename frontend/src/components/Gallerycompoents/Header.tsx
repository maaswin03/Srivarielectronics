import { Button } from "@/components/ui/button"
import styles from "./Header.module.css"

export default function Header(){
  return (
    <div className={styles.header}>
      <h1>Explore Our Gallery</h1>
      <p>Discover stunning visuals with immersive effects</p>
      <Button className={styles.homeButton} onClick={() => window.location.href = "/"}>
        Return to Home
      </Button>
    </div>
  )
}



