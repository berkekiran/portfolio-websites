import type { IChildren } from '@/types/nextGlobals';

interface IProps extends IChildren {
    className?: string;
}

const Wrapper: React.FC<IProps> = ({ children, className = '' }) => {
    return (
        <div className='flex justify-center items-center lg:w-[960px] md:w-[640px] sm:w-[480px] w-screen'>
            <div className={'flex ' + className}>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;