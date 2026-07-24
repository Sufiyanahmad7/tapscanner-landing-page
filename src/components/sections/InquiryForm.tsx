'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Sparkles, Building2, User, Mail, Phone, Globe, MapPin, Layers, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

const formSchema = z.object({
  companyName: z.string().min(1, 'Company name is required').min(2, 'Company name must be at least 2 characters'),
  industry: z.string().min(1, 'Please select an industry'),
  country: z.string().min(1, 'Country is required').min(2, 'Country must be at least 2 characters'),
  city: z.string().min(1, 'City is required').min(2, 'City must be at least 2 characters'),
  organizationSize: z.string().min(1, 'Please select organization size'),
  locationCount: z.string().min(1, 'Please select number of locations'),
  employeeCount: z.string().min(1, 'Please select total employee count'),
  interestedModules: z.array(z.string()).optional(),
  contactPerson: z.string().min(1, 'Full contact name is required').min(2, 'Full contact name must be at least 2 characters'),
  businessEmail: z
    .string()
    .min(1, 'Business email is required')
    .email('Invalid email address')
    .refine(
      (email) => !email.endsWith('@gmail.com') && !email.endsWith('@yahoo.com') && !email.endsWith('@hotmail.com'),
      { message: 'Please use your corporate work email for enterprise access' }
    ),
  phoneNumber: z.string().min(1, 'Phone number is required').min(7, 'Valid phone number is required'),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, 'Consent is required to process request'),
});

type FormValues = z.infer<typeof formSchema>;

export const InquiryForm: React.FC<{ isModal?: boolean }> = ({ isModal = false }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consent: true,
      industry: 'Enterprise',
      organizationSize: '201-1000',
      locationCount: '1-5 Locations',
      employeeCount: '500-2000 Employees',
    },
  });

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (currentStep === 1) {
      fieldsToValidate = ['companyName', 'industry', 'country', 'city'];
    } else if (currentStep === 2) {
      fieldsToValidate = ['organizationSize', 'locationCount', 'employeeCount'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1200);
  };

  return (
    <section className={isModal ? "" : "py-24 bg-white relative overflow-hidden"} id={isModal ? undefined : "demo-inquiry"}>
      <div className={isModal ? "w-full p-4 md:p-6" : "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"}>
        {!isModal ? (
          <div className="text-center mb-12">
            <Badge variant="orange" size="md" className="mb-4">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Enterprise Sales & Pilot Inquiry
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Request a Personalized Enterprise Demo.
            </h2>
            <p className="text-base text-slate-600 font-medium">
              Discover how TapScanner transforms visitor security, gate passes, and audit compliance across your facilities.
            </p>
          </div>
        ) : (
          <div className="mb-6 pr-10">
            <Badge variant="orange" size="md" className="mb-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              Enterprise Sales & Pilot Inquiry
            </Badge>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Request a Personalized Enterprise Demo.
            </h2>
          </div>
        )}

        <div className={isModal ? "w-full" : "p-6 md:p-10 border border-slate-200 rounded-3xl bg-white shadow-2xl"}>
          {!isSubmitted ? (
            <div>
              {/* Stepper Progress Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        currentStep === stepNum
                          ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                          : currentStep > stepNum
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {currentStep > stepNum ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                    </div>
                    <span className="hidden md:inline text-xs font-semibold text-slate-700">
                      {stepNum === 1
                        ? 'Company'
                        : stepNum === 2
                        ? 'Scale'
                        : 'Contact'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* STEP 1: Company Info */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-orange-500" /> Step 1: Company Profile
                      </h3>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Company Name *
                        </label>
                        <input
                          {...register('companyName')}
                          placeholder="e.g. Acme Industrial Group"
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                        />
                        {errors.companyName && (
                          <p className="text-xs text-red-500 mt-1">{errors.companyName.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Industry Vertical *
                          </label>
                          <input
                            {...register('industry')}
                            list="industry-suggestions"
                            placeholder="Select or enter industry..."
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          <datalist id="industry-suggestions">
                            <option value="Enterprise Corporate" />
                            <option value="Manufacturing & Plant" />
                            <option value="IT & Tech Park" />
                            <option value="Healthcare & Hospital" />
                            <option value="Educational Institution" />
                            <option value="Warehousing & Logistics" />
                            <option value="Government Security" />
                          </datalist>
                          {errors.industry && (
                            <p className="text-xs text-red-500 mt-1">{errors.industry.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Country *
                          </label>
                          <input
                            {...register('country')}
                            placeholder="e.g. United States / India"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          {errors.country && (
                            <p className="text-xs text-red-500 mt-1">{errors.country.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            City *
                          </label>
                          <input
                            {...register('city')}
                            placeholder="e.g. San Francisco / Mumbai"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          {errors.city && (
                            <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Scale */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-5"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-orange-500" /> Step 2: Facility Scale
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Organization Size
                          </label>
                          <input
                            {...register('organizationSize')}
                            list="org-size-suggestions"
                            placeholder="e.g. 500 employees or select..."
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          <datalist id="org-size-suggestions">
                            <option value="1-50 employees" />
                            <option value="51-200 employees" />
                            <option value="201-1,000 employees" />
                            <option value="1,000-5,000 employees" />
                            <option value="5,000+ employees" />
                          </datalist>
                          {errors.organizationSize && (
                            <p className="text-xs text-red-500 mt-1">{errors.organizationSize.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Facility Locations / Gates
                          </label>
                          <input
                            {...register('locationCount')}
                            list="location-suggestions"
                            placeholder="Enter number or select..."
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          <datalist id="location-suggestions">
                            <option value="1 Location / Gate" />
                            <option value="2 - 5 Locations" />
                            <option value="6 - 20 Locations" />
                            <option value="20+ Global Facilities" />
                          </datalist>
                          {errors.locationCount && (
                            <p className="text-xs text-red-500 mt-1">{errors.locationCount.message}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Daily Expected Visitors
                          </label>
                          <input
                            {...register('employeeCount')}
                            list="visitor-suggestions"
                            placeholder="Enter number or select..."
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          <datalist id="visitor-suggestions">
                            <option value="< 50 visitors / day" />
                            <option value="50 - 300 visitors / day" />
                            <option value="300 - 1,000 visitors / day" />
                            <option value="1,000+ high volume daily" />
                          </datalist>
                          {errors.employeeCount && (
                            <p className="text-xs text-red-500 mt-1">{errors.employeeCount.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Contact Info */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-orange-500" /> Step 3: Contact Details
                      </h3>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Contact Name *
                        </label>
                        <input
                          {...register('contactPerson')}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                        />
                        {errors.contactPerson && (
                          <p className="text-xs text-red-500 mt-1">{errors.contactPerson.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Business Email * (Corporate Domain Required)
                          </label>
                          <input
                            {...register('businessEmail')}
                            placeholder="john@yourcompany.com"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          {errors.businessEmail && (
                            <p className="text-xs text-red-500 mt-1">
                              {errors.businessEmail.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            {...register('phoneNumber')}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none"
                          />
                          {errors.phoneNumber && (
                            <p className="text-xs text-red-500 mt-1">{errors.phoneNumber.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Additional Requirements or Note (Optional)
                        </label>
                        <textarea
                          {...register('message')}
                          rows={2}
                          placeholder="Tell us about your facility gates or specific hardware setup..."
                          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-orange-500/40 focus:outline-none resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-2.5 pt-2">
                        <input
                          type="checkbox"
                          id="consent"
                          {...register('consent')}
                          className="mt-1 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                        />
                        <label htmlFor="consent" className="text-xs text-slate-600 leading-snug">
                          I agree to allow TapScanner to contact me regarding this demo request and product updates in accordance with GDPR privacy terms.
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-xs text-red-500 mt-1">{errors.consent.message}</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Form Navigation Controls */}
                <div className="sticky bottom-0 bg-white pt-4 pb-2 mt-6 border-t border-slate-200 flex items-center justify-between z-20">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      leftIcon={<ArrowLeft className="w-4 h-4" />}
                    >
                      Previous
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={handleNextStep}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-4 h-4" />}
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 cursor-pointer"
                    >
                      Send Demo Request
                    </Button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Animated Success Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                Demo Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you. A TapScanner Enterprise Solutions Specialist has been assigned to your account and will contact you within 2 business hours.
              </p>
              <Badge variant="orange" size="lg" className="mb-6">
                <ShieldCheck className="w-4 h-4" /> Priority Enterprise Queue Assigned
              </Badge>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
