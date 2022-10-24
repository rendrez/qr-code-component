import qrCode from "../images/image-qr-code.png";

export default function Card() {
  return (
    <div className="bg-white w-[320px] flex flex-col justify-center items-center gap-4 text-center p-3 rounded-xl pb-10">
      <img src={qrCode} alt="qr-code" width={300} className="rounded-xl" />
      <div className="flex flex-col justify-center items-center gap-4 w-[275px]">
        <h1 className="text-2xl text-darkBlue font-outfit font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="font-outfit font-medium text-grayishBlue text-[15px]">
          scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
