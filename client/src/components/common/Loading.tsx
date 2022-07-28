interface LoadingProps {
  message: string;
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      <div className="font-semibold text-defaultBlack">{message}</div>
    </div>
  );
};

export default Loading;
