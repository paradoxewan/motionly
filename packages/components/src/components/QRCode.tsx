import ReactQRCode from "react-qr-code";
import { StyleAndClass } from "../types";
import { QRCodeProps } from "../types/components";

export const defaultQRCodeProps: QRCodeProps = {
  type: "qrcode",
  text: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
};

export const QRCode = ({
  text,
  color,
  background: backgroundColor,
  style,
  className,
}: QRCodeProps & StyleAndClass) => {
  return (
    <ReactQRCode
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      value={text}
      fgColor={color}
      bgColor={backgroundColor}
    />
  );
};
