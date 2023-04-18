import { useEffect } from "react";

interface RequestPermissionProps {
  permission: "audio" | "video";
}

export const useRequestPermissions = ({
  permission,
}: RequestPermissionProps) => {
  useEffect(() => {
    const constraints: MediaStreamConstraints = {
      [permission]: true,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream: MediaStream) => {
        stream.getTracks().forEach((track: MediaStreamTrack) => {
          track.stop();
        });
      })
      .catch((error: Error) => {
        console.error("Error requesting camera and microphone access:", error);
      });
  }, [permission]);
};
