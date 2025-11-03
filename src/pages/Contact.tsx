import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Calendar, Clock, Instagram, MessageCircle, Award, Coffee, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import { useDocumentTitle } from '../hooks/useSEO';

const Contact = () => {
  useDocumentTitle({
    title: 'Contact',
    description: 'Get in touch with Kinshuk Saxena. Available for freelance projects, collaborations, and full-time opportunities.'
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'kinshuksaxena3@gmail.com',
      link: 'mailto:kinshuksaxena3@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 9057538521',
      link: 'tel:+919057538521',
      description: 'Available during business hours'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Jaipur, Rajasthan, INDIA',
      link: 'https://maps.google.com/?q=Jaipur,Rajasthan',
      description: 'Open to remote opportunities'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: 'GitHub',
      link: 'https://github.com/kinshukkush',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-700',
      username: '@kinshukkush'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kinshuk-saxena-/',
      color: 'hover:bg-blue-600',
      username: 'kinshuk-saxena'
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: 'Instagram',
      link: 'https://instagram.com/kinshuk._.saxena',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600',
      username: '@kinshuk._.saxena'
    }
  ];

  const availability = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: 'Working Days',
      value: 'Monday - Friday',
      description: 'Weekend availability for urgent matters'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Working Hours',
      value: '9:00 AM - 6:00 PM (IST)',
      description: 'Flexible for different time zones'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Time Zone',
      value: 'UTC +5:30',
      description: 'Indian Standard Time'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: 'Response Time',
      value: 'Within 24 hours',
      description: 'Usually much faster'
    }
  ];

  const additionalInfo = [
    {
      icon: <Coffee className="h-5 w-5" />,
      title: 'Open for',
      items: ['Freelance Projects', 'Full-time Positions', 'Collaborations', 'Consultations']
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: 'Expertise',
      items: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'API Development']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Get In Touch" 
              subtitle="Have a project in mind? Let's discuss how we can work together to bring your ideas to life." 
              centered 
            />
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.title === 'Location' ? '_blank' : undefined}
                rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                className="group card p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50 transition-colors duration-300">
                    <div className="text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Introduction */}
                <div className="card p-6">
                  <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I'm always excited to connect with fellow developers, potential clients, and anyone interested in technology. Whether you have a project in mind, need technical consultation, or just want to chat about the latest in tech, I'd love to hear from you!
                  </p>
                </div>
                
                {/* Availability Section */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-6">Availability</h3>
                  <div className="space-y-4">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0">
                          <div className="text-primary-600 dark:text-primary-400">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 dark:text-gray-200">{item.title}</p>
                          <p className="text-gray-700 dark:text-gray-300">{item.value}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`p-2 rounded-lg bg-gray-200 dark:bg-gray-700 ${social.color} transition-colors duration-300`}>
                          <div className="text-gray-700 dark:text-gray-300">
                            {social.icon}
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">{social.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{social.username}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {additionalInfo.map((info, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          <div className="text-primary-600 dark:text-primary-400">
                            {info.icon}
                          </div>
                        </div>
                        <h4 className="font-semibold">{info.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {info.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <ContactForm />
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 card p-4"
              >
                <h3 className="text-xl font-semibold mb-4">Find Me Here</h3>
                <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-inner">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.01283874588!2d75.72347644999999!3d26.8856553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1633938424363!5m2!1sen!2sin" 
                    className="w-full h-full border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    title="Location Map"
                  ></iframe>
                </div>
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
