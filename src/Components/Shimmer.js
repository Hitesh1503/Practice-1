import "../CSS_Component/Shimmer.css";

export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-lines">
              <div className="shimmer-line short"></div>
              <div className="shimmer-line"></div>
              <div className="shimmer-line"></div>
            </div>
          </div>
        ))}
    </div>
  );
};
