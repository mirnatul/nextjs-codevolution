import Card from '@/components/card';
import React from 'react';
import Link from 'next/link';

const ArchivedNotifications = () => {
    return (
        <Card>
            <div> archived notifications</div>
            <br />
            <Link href='/complex-dashboard'>Default</Link>
        </Card>
    );
};

export default ArchivedNotifications;