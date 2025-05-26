import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Product',
        href: '/products/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Product" />
            <div className='w-8/12 p-4'>
                <form action="">
                    <div>
                        <Label htmlFor="Product Name">Name</Label>
                        <Input placeholder='Product Name'></Input>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
