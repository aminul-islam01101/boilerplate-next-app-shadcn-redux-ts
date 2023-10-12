import { FC, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
};

export default Container;
