"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";


const Page = () => {

  return (
        <section className="mt-4">
          <h2 className="text-2xl font-bold my-4">Resources</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
            <Card>
              <CardHeader>
                <CardTitle>MTS 216</CardTitle>
              </CardHeader>
              <CardContent>
                <p>MTS 216 Past question 2024/2025</p>
              </CardContent>
              <CardFooter>
                <Button className='text-white'>Download</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MTS 216</CardTitle>
              </CardHeader>
              <CardContent>
                <p>MTS 216 Past question 2024/2025</p>
              </CardContent>
              <CardFooter>
                <Button className='text-white'>Download</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MTS 216</CardTitle>
              </CardHeader>
              <CardContent>
                <p>MTS 216 Past question 2024/2025</p>
              </CardContent>
              <CardFooter>
                <Button className='text-white'>Download</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MTS 216</CardTitle>
              </CardHeader>
              <CardContent>
                <p>MTS 216 Past question 2024/2025</p>
              </CardContent>
              <CardFooter>
                <Button className='text-white'>Download</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MTS 216</CardTitle>
              </CardHeader>
              <CardContent>
                <p>MTS 216 Past question 2024/2025</p>
              </CardContent>
              <CardFooter>
                <Button className='text-white'>Download</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MTS 216</CardTitle>
              </CardHeader>
              <CardContent>
                <p>MTS 216 Past question 2024/2025</p>
              </CardContent>
              <CardFooter>
                <Button className='text-white'>Download</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
  );
};

export default Page;
