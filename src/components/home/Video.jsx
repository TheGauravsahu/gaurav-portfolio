import CTAVid from "../../assets/videos/1.mp4";

const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="w-full h-full object-cover"
        loop
        autoPlay
        muted
        src={CTAVid}
        preload="metadata"
      />
    </div>
  );
};

export default Video;
