import Link from 'next/link'

import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

interface SocialProps {
  containerStyles?: string
  iconStyles?: string
}

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/jandersonvb' },

  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/jandersonvilasboas/' },
  { icon: <FaTwitter />, path: 'https://x.com/jandersonvb_dev' },
  { icon: <FaWhatsapp />, path: 'https://wa.me/5535998102070' },

]

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }: SocialProps) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => (
      <Link href={item.path} key={index} className={iconStyles} target='_blank'>
        {item.icon}
      </Link>
    ))}
  </div>
}

export default Social;