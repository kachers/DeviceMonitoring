import Image from 'next/image';

interface HeadProps {
  onFilterChange: (filter: 'All' | 'Online' | 'Offline') => void;
  currentFilter: 'All' | 'Online' | 'Offline';
  onlineCount: number;
  offlineCount: number;
}

const Head: React.FC<HeadProps> = ({ onFilterChange, currentFilter, onlineCount, offlineCount }) => {
  return (
    <div className='flex p-0 px-5 justify-between items-center flex-1'>
      <div className='flex items-start gap-1'>
        <button
          onClick={() => onFilterChange('Online')}
          className={`flex p-1.5 pl-4 justify-center items-center gap-2.5 rounded-md border border-solid font-medium
          ${currentFilter === 'Online' ? 'border-primary-300 bg-primary-300 text-neutral-100' : 'border-neutral-400 bg-neutral-100 text-neutral-800'}`}>
          Online
          <label className={`flex px-2 py-1 justify-center items-center gap-2.5 rounded text-xs font-medium ${
            currentFilter === 'Online' ? 'bg-primary-100 text-primary-500' : 'bg-neutral-200 text-neutral-700'
          }`}>
            {onlineCount}
          </label>
        </button>
        <button
          onClick={() => onFilterChange('Offline')}
          className={`flex p-1.5 pl-4 justify-center items-center gap-2.5 rounded-md border border-solid font-medium
          ${currentFilter === 'Offline' ? 'border-primary-300 bg-primary-300 text-neutral-100' : 'border-neutral-400 bg-neutral-100 text-neutral-800'}`}>
          Offline
          <label className={`flex px-2 py-1 justify-center items-center gap-2.5 rounded text-xs font-medium ${
            currentFilter === 'Offline' ? 'bg-primary-100 text-primary-500' : 'bg-neutral-200 text-neutral-700'
          }`}>
            {offlineCount}
          </label>
        </button>
      </div>
      <div className='flex flex-col items-start gap-2.5 w-[300px] py-[9px] pl-3 pr-4 bg-neutral-200 rounded-md'>
        <div className='flex items-center self-stretch text-[14px]/[18px] gap-2.5'>
          <Image src="/Search.svg" alt="Avatar" width={16} height={16} />
          <input placeholder="Quick search.." className='bg-neutral-200'></input>
        </div>
      </div>
    </div>
  );
};

export default Head;