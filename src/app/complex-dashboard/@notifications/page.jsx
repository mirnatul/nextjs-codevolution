import Card from '@/components/card';
import React from 'react';
import Link from 'next/link';

const Notifications = () => {
    return (
        <Card>
            <div>notifications</div>
            <br />
            <Link href='/complex-dashboard/archived'>Archive</Link>
        </Card>
    );
};

export default Notifications;