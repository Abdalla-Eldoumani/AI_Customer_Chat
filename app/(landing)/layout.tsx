const LandingLayout = ({ children }: {children: React.ReactNode;}) => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          {children}
        </div>
      );
}
 
export default LandingLayout;