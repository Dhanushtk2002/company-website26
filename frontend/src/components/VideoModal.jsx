import React from 'react';
import { X } from 'lucide-react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="video-responsive">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="GenLab Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
