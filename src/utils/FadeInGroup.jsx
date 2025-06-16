// src/utils/FadeInGroup.jsx
import React from 'react';
import FadeInSection from './FadeInSection';

const FadeInGroup = ({ children }) => {
    return React.Children.map(children, child =>
        <FadeInSection>{child}</FadeInSection>
    );
};

export default FadeInGroup;
