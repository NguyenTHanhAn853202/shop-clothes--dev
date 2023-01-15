import { Suspense } from 'react';
import Loading from '../loading';

function LazyCom({ children }) {
    return (
        <Suspense
            fallback={
                <div style={{ position: 'relative', width: '100%', height: '60vh' }}>
                    <Loading bigSize={true} />
                </div>
            }
        >
            {children}
        </Suspense>
    );
}

export default LazyCom;
