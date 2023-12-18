import Image from 'next/image';
import { useAppState } from '../../AppStateContext';

const Navigation: React.FC = () => {
  const { activeComponent, setActiveComponent } = useAppState();

  const links = [
    { icon: '/icon.svg', component:'Dashboard', text: 'Dashboard' },
    { icon: '/icon1.svg', component:'Connectors', text: 'Connectors' },
    { icon: '/icon2.svg', component:'Devices', text: 'Devices' },
    { icon: '/icon3.svg', component:'General-Settings', text: 'General Settings' },
  ];

  return (
    <nav>
      <div className='flex h-[40px] items-center gap-8'>
        {links.map((link) => (
          <a
            key={link.component}
            href="#"
            className={`flex items-center gap-2 ${activeComponent === link.component ? 'text-neutral-100' : 'text-neutral-500'}`}
            onClick={() => setActiveComponent(link.component)}
          >
            <Image src={link.icon} alt="icon" width={24} height={24} />
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;