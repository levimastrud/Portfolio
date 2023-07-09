import React, { useState } from 'react';

const ImageZoom = ({ src }) => {
    const [zoom, setZoom] = useState('contain');
    const [position, setPosition] = useState({x: '50%', y: '50%'});

    const handleMouseMove = (e) => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({x: `${x}%`, y: `${y}%`});
        setZoom('200%');
    };

    const handleMouseLeave = () => {
        setPosition({x: '50%', y: '50%'});
        setZoom('contain');
    };

    return (
        <div
            style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${position.x} ${position.y}`,
                backgroundSize: zoom,
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '500px',
                margin: '1em 0',
                transition: 'background-position 0.1s, background-size 0.5s'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        ></div>
    );
};

export default ImageZoom;
