import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => (
    <div>
        <footer className={styles.footer}>
            <span className={styles.logo}>
                <Image src="/logo_image_text.svg" alt="Vercel Logo" width={100} height={50} />
            </span>
        </footer>
    </div>
)
export default Footer