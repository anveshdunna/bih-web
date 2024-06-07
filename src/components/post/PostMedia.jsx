import Image from "next/image";

export default function PostMedia(props) {
  const { mediaImgSrc } = props;
  return (
    <div className="inside-border mt-2 h-80 overflow-clip rounded-xl bg-surface-secondary">
      <Image
        alt=""
        src={mediaImgSrc}
        className="h-full w-full object-cover"
        width={1200}
        height={1200}
      />
    </div>
  );
}
