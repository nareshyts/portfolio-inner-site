import React from 'react';
// REMOVED: import Resume from '../../assets/resume/Henry_Heffernan_S22_Resume.pdf';
import printer from '../../assets/resume/printer.gif';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    // This function does nothing - just prevents any action
    const handleClick = () => {
        // No action - you don't want to do anything
        console.log("No resume available");
    };

    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : 'Looking for my resume?'}</h3>
                {/* Changed from <a> to <button> */}
                <button 
                    type="button"
                    onClick={handleClick}
                    style={styles.linkButton}
                >
                    <p>u can't find cauz i don't have !</p>
                </button>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
    // Added style to make button look like a link
    linkButton: {
        background: 'none',
        border: 'none',
        padding: 0,
        margin: 0,
        cursor: 'pointer',
        color: 'inherit',
        font: 'inherit',
        textDecoration: 'underline',
    },
};

export default ResumeDownload;
