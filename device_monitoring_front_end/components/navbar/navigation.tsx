import Link from './link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className='flex h-[40px] items-center gap-8'>
        <Link icon="/icon.svg" href="/dashboard" text="Dashboard" />
        <Link icon="/icon1.svg" href="/connectors" text="Connectors" />
        <Link icon="/icon2.svg" href="/devices" text="Devices" />
        <Link icon="/icon3.svg" href="/settings" text=" General Settings" />
      </div>
    </nav>
  );
};

export default Navigation;