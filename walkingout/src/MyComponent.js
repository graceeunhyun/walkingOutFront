import React from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  const { name, children, favoriteNumbers } = props;
  return (
    <div>
      안녕하세요 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다
    </div>
  );
};

//default props
// 기본 이름으로 나타나짐
MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumbers: PropTypes.number.isRequired,
};
export default MyComponent;
