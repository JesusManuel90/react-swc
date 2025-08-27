export const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <div className="
        bg-slate-800 
        rounded-2xl 
        shadow-2xl 
        w-full max-w-md 
        border border-slate-700
      ">
        {children}
      </div>

    </div>
  );
};