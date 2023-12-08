import styles from "../../styles/navbar.module.css"
import Image from 'next/image';

interface LinkProps {
  name: string;
  avatar: string;
}
const Userinfo: React.FC<LinkProps> = ({ name,avatar }) => {

    const customStyle = {
        width: '104px',
        height: '32px',
        gap: '8px',
      };

  return (
    <div className={`flex gap-32 ${styles.userLayout}`}>
      <Image src={avatar} alt="Avatar" width={32} height={32}/>
      <span>{name}</span>
      <Image src="/chevronDown.svg" alt="Avatar" width={8} height={6}/>
    </div>
  );
};

export default Userinfo;