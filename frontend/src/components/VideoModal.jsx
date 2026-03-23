import React from 'react';
import { X } from 'lucide-react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoId, isLocal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="video-container">
          {isLocal ? (
            <video 
              controls 
              autoPlay 
              className="local-video"
              src={videoId}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="video-responsive">
              <iframe
                width="560"
                height="315"
                src={`https://www.instagram.com/reel/${videoId}/embed/`}
                title="GenLab Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
