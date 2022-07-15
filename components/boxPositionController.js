/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Button from "@mui/material/Button";

export default function BoxPositionController(props) {
  //   propsの取り出し
  var boxX = props.boxX;
  var boxY = props.boxY;
  var boxZ = props.boxZ;
  var setBoxX = (boxX) => props.setBoxX(boxX);
  var setBoxY = (boxY) => props.setBoxY(boxY);
  var setBoxZ = (boxZ) => props.setBoxZ(boxZ);

//   onclickイKベント用関数
var xIncrease = () => setBoxX(boxX + 1)
var xDecrease = () => setBoxX(boxX - 1)
var yIncrease = () => setBoxY(boxY + 1)
var yDecrease = () => setBoxY(boxY - 1)
var zIncrease = () => setBoxZ(boxZ + 1)
var zDecrease = () => setBoxZ(boxZ - 1)

  return (
    <div css={flexStyle}>
      <p className="controller">BOX配置操作</p>
      <div>
        X :　
        <Button variant="contained" size="small" onClick={() => xDecrease()}>
          ←
        </Button>
        　{boxX}　
        <Button variant="contained" size="small" onClick={() => xIncrease()}>
          →
        </Button>
      </div>
      <div>
        Y :　
        <Button variant="contained" size="small" onClick={() => yDecrease()}>
          ←
        </Button>
        　{boxY}　
        <Button variant="contained" size="small" onClick={() => yIncrease()}>
          →
        </Button>
      </div>
      <div>
        Z :　
        <Button variant="contained" size="small" onClick={() => zDecrease()}>
          ←
        </Button>
        　{boxZ}　
        <Button variant="contained" size="small" onClick={() => zIncrease()}>
          →
        </Button>
      </div>
    </div>
  );
}

const flexStyle = css({
  display: "flex",
  flexDirection: "column",
  width: "400px",
});