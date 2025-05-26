import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Product',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="products" />
            <div className='m-4'>
                
            </div>
        </AppLayout>
    );
}
