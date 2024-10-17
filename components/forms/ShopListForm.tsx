"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { shoplistSchema } from "@/lib/validations"
import { useState } from "react"
import { addShopList } from "@/lib/actions/user.action"
import { auth } from "@clerk/nextjs/server"
import { useRouter } from "next/navigation"

interface Props {
    clerkId: string | null
}


const ShopListForm = ({ clerkId }: Props) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof shoplistSchema>>({
        resolver: zodResolver(shoplistSchema),
        defaultValues: {
            title: '',
            description: '',
        }
    })

    const handleAddList = async(values: z.infer<typeof shoplistSchema>) => {
        setIsSubmitting(true);

        try {
            await addShopList({
                clerkId,
                title: values.title,
                description: values.description,
            })

            form.reset();

            router.push('/shop-list')

            alert("List created successfully")
            
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddList)} className="space-y-8 w-full flex flex-col justify-center items-center">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col items-start lg:items-center gap-2 px-4 justify-center">
                  <FormLabel>
                    <p className="text-dark100_light900 paragraph-regular items-start">Title<span className="text-red-500">*</span></p>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Name of List" className="shadow-md rounded-md w-full max-w-[900px] h-[50px] p-2" {...field} />
                  </FormControl>
                  <FormMessage className='text-red-500'/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col items-start lg:items-center gap-2 px-4 justify-center">
                  <FormLabel>
                    <p className="text-dark100_light900 paragraph-regular items-start">Description</p>
                  </FormLabel>
                  <FormControl>
                    <textarea placeholder="List Description" className="shadow-md rounded-md w-full max-w-[900px] h-[150px] p-2" {...field}></textarea>
                  </FormControl>
                  <FormMessage className='text-red-500'/>
                </FormItem>
              )}
            />
            <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-primary-600 dark:bg-primary-600 dark:text-light-900 font-semibold h-[50px] text-md w-full max-w-[900px]"
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </form>
        </Form>
      )
}

export default ShopListForm