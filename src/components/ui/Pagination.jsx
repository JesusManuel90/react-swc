export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  
  const buttonBaseStyle = "px-4 py-2 text-gray-300 font-semibold rounded-lg transition-colors duration-200";
  const activeButtonStyle = "bg-slate-800 border border-slate-700 hover:bg-slate-700";
  const disabledButtonStyle = "bg-slate-800 border border-slate-700 opacity-50 cursor-not-allowed";

  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`${buttonBaseStyle} ${currentPage === 1 ? disabledButtonStyle : activeButtonStyle}`}
      >
        Anterior
      </button>
      <span className="text-gray-400 font-medium">
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`${buttonBaseStyle} ${currentPage === totalPages ? disabledButtonStyle : activeButtonStyle}`}
      >
        Siguiente
      </button>
    </div>
  );
};
