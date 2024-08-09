"use client";

export const Testimonials = () => {
    const testimonials = [
      {
        name: 'John Doe',
        title: 'CEO of Company XYZ',
        testimonial:
          'This AI chat support has drastically improved our customer satisfaction rates!',
      },
      {
        name: 'Jane Smith',
        title: 'CTO of Tech Innovators',
        testimonial:
          'We love how easy it is to integrate and the 24/7 support is fantastic!',
      },
      {
        name: 'Alex Johnson',
        title: 'COO of Marketing Pros',
        testimonial:
          'Our team has been able to focus on more important tasks, thanks to this AI chat support.',
      },
      {
        name: 'Sarah Brown',
        title: 'CFO of Finance Wizards',
        testimonial:
          'The AI chat support has helped us cut costs and improve our customer service.',
      },
      {
        name: 'Michael Lee',
        title: 'CMO of Sales Gurus',
        testimonial:
          'We have seen a significant increase in sales since implementing this AI chat support.',
      },
      {
        name: 'Emily Davis',
        title: 'CIO of Tech Startups',
        testimonial:
          'The AI chat support has helped us scale our business faster than we ever thought possible.',
      }
    ];
  
    return (
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-lg mb-4">&quot;{testimonial.testimonial}&quot;</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>
    );
}