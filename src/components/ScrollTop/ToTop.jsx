import ScrollToTop from 'react-scroll-to-top';


export const ToTop = () => {
  return (
    <div className="ToTop">
      <ScrollToTop
        top={300}
        color="#6931d1"
        smooth="true"
        viewBox="0 0 32 32"
        svgPath="M16 1l-15 15h9v16h12v-16h9z"
      />
    </div>
  );
};