import React, {
    useCallback,
    useEffect, useMemo,
    useState,
} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import ContextMenu from './ContextMenu';

const BACKDROP_STYLE = {
    zIndex: 100,
};

const useContextMenu = () => {
    const [contextMenuSettings, setContextMenuSettings] = useState(null);
    const [component, setComponent] = useState(() => () => null);
    const handleShowContextMenu = useCallback((event) => {
        setContextMenuSettings({
            x: event.clientX,
            y: event.clientY,
        });
    }, [setContextMenuSettings]);

    const handleHideContextMenu = useCallback(() => {
        setContextMenuSettings(null);
    }, [setContextMenuSettings]);

    useEffect(() => {
        setComponent(() => () => {
            const style = useMemo(() => ({
                position: 'fixed',
                top: contextMenuSettings?.y,
                left: contextMenuSettings?.x,
            }), [contextMenuSettings]);

            return (
                <Backdrop
                    open={!!contextMenuSettings}
                    invisible
                    onClick={handleHideContextMenu}
                    style={BACKDROP_STYLE}
                >
                    <div style={style}>
                        <ContextMenu>
                            Test
                        </ContextMenu>
                    </div>
                </Backdrop>
            );
        });
    }, [setComponent, contextMenuSettings]);

    return [handleShowContextMenu, component];
};

export default useContextMenu;
