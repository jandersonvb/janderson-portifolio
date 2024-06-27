import Link from 'next/link'

import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface SocialProps {
  containerStyles?: string
  iconStyles?: string
}

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedin />, path: '' },
  { icon: <FaTwitter />, path: '' },

]

const Social: React.FC<SocialProps> = ({ containerStyles, iconStyles }: SocialProps) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => (
      <Link href={item.path} key={index} className={iconStyles}>
        {item.icon}
      </Link>
    ))}
  </div>
}

export default Social;