import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head,Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Product',
        href: '/products/create',
    },
];

export default function Index() {
    const{data,setData,post,processing,error}=useForm({
        name:'apple',
        price:'',
        descripton:''
    });
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        console.log(data)
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Product" />
            <div className="w-8/12 p-4">
                <form action="" className="space-y-4" onSubmit={handleSubmit}>
                    <div className="gap-1.5">
                        <Label htmlFor="Product Name">Name</Label>
                        <Input placeholder="Product Name" value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="Product Price">Price</Label>
                        <Input placeholder="Product Price" value={data.price} onChange={(e) => setData('price', e.target.value)}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="Product Price">Description</Label>
                        <Textarea
                            placeholder="Description"
                            value={data.descripton}
                            onChange={(e) => setData('descripton', e.target.value)}
                        ></Textarea>
                    </div>
                    <Button type="Submit">Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
