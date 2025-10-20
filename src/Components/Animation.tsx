interface AnimationProps {
  gif?: string;
  webp?: string;
  webm?: string;
  alt: string;
}

const Animation = ({ alt, gif, webm, webp }: AnimationProps) => {
  // const mediaType = useMemo(() => {
  //   const v = document.createElement('video');
  //   if (webm && v.canPlayType('video/webm')) {
  //     return 'video/webm';
  //   } else if (webp && v.canPlayType('video/webp')) {
  //     return 'video/webp';
  //   } else if (gif) {
  //     return 'image/gif';
  //   } else {
  //     return undefined;
  //   }
  // }, [gif, webm, webp]);
  //
  // return (
  //   <video autoPlay loop muted playsInline aria-hidden={true} tabIndex={-1}>
  //     {mediaType === 'video/webm' ? (
  //       <source src={webm} type="video/webm" />
  //     ) : mediaType === 'video/webp' ? (
  //       <source src={webp} type="video/webp" />
  //     ) : mediaType === 'image/gif' ? (
  //       <img alt={alt} src={gif} />
  //     ) : undefined}
  //   </video>
  // );

  return (
    <video autoPlay loop muted playsInline aria-hidden={true} tabIndex={-1}>
      <source src={webm} type="video/webm" />
      <source src={webp} type="video/webp" />
      <img alt={alt} src={gif} />
    </video>
  );
};

export default Animation;
