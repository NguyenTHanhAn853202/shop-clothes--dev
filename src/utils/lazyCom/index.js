import { Suspense } from 'react';

function LazyCom({ children }) {
    return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}

export default LazyCom;
