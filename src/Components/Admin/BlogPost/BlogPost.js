import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
// import './BlogPost.css'

const BlogPost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch(`https://agile-bayou-97493.herokuapp.com/totalBlogss`, {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((result) => {
            if(typeof(result) == "string"){
                Swal.fire({
                    icon: 'success',
                    title: 'WoW...',
                    text: 'Add Product Successfully',
                    // footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        })
    };
    return (
        <div className="bg-dark text-light my-5 py-3 add-tour m-auto register_banner ">
            <h2 className="mt-5 text-center">Add Products</h2>
            <div className=''>
            <form className='text-center' onSubmit={handleSubmit(onSubmit)}>
            <input className="p-2 m-2 form-control w-50 m-auto" type= "url"  {...register("img")} placeholder="image" />
            <br />
            <input className="p-2 m-2 form-control w-50 m-auto"  {...register("name")} placeholder="title" />
            <br />
            <input className="p-2 m-2 form-control w-50 m-auto" {...register("info", { required: true })} placeholder="Traveler Info" />
            <br />
            <input className="p-2 m-2 form-control w-50 m-auto" {...register("description", { required: true })} placeholder="description" />
            <br />
            <input className="p-2 m-2 form-control w-50 m-auto" {...register("category", { required: true })} placeholder="category" />
            <br />
            <input className="p-2 m-2 form-control w-50 m-auto" {...register("price", { required: true })} placeholder="cost" />
            <br />
            <input className="p-2 m-2 form-control w-50 m-auto" {...register("location", { required: true })} placeholder="location" />
           
            
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <br />
            <input className="btn btn-danger mt-4" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default BlogPost;