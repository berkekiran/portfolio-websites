import type { IChildren } from '@/types/nextGlobals';

interface IProps extends IChildren {
    className?: string;
    id?: string;
}

const Container: React.FC<IProps> = ({ children, className = '', id = '' }) => {
    return (
        <div className={'flex w-screen ' + className} id={id}>
            {children}
        </div>
    );
};

export default Container;