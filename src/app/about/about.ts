import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'سالم أحمد',
      role: 'مصور محترف',
      avatar: '1.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 2,
      name: 'محمد علي',
      role: 'مصور بورتريه',
      avatar: '2.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 3,
      name: 'إبراهيم حسن',
      role: 'مصور طبيعة',
      avatar: '3.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 4,
      name: 'داود خالد',
      role: 'مدرب تصوير',
      avatar: '4.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 5,
      name: 'ليث محمود',
      role: 'فنان بصري',
      avatar: '5.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      id: 6,
      name: 'عمر سعيد',
      role: 'خبير إضاءة',
      avatar: '6.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 7,
      name: 'علي راشد',
      role: 'مصور أحداث',
      avatar: '7.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 8,
      name: 'ليث محمد',
      role: 'مصور رياضي',
      avatar: '8.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 9,
      name: 'فهد العتيبي',
      role: 'مدير محتوى',
      avatar: '9.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      id: 10,
      name: 'سعود الدوسري',
      role: 'مصور فوتوغرافي',
      avatar: '10.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 11,
      name: 'يوسف القحطاني',
      role: 'فنان بصري',
      avatar: '11.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 12,
      name: 'ماجد الشهري',
      role: 'مصور طبيعة',
      avatar: '12.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 13,
      name: 'راشد الغامدي',
      role: 'مدرب ورش عمل',
      avatar: '13.jpg',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#',
      },
    },
    {
      id: 14,
      name: 'نواف الحربي',
      role: 'خبير معدات',
      avatar: '14.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 15,
      name: 'بندر المطيري',
      role: 'مصور فيديو',
      avatar: '15.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 16,
      name: 'طلال العمري',
      role: 'مدير تقني',
      avatar: '16.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 17,
      name: 'كريم الزهراني',
      role: 'مصور تجاري',
      avatar: '17.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 18,
      name: 'سلطان الشمري',
      role: 'محرر صور',
      avatar: '18.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 19,
      name: 'سلطان الشمري',
      role: 'محرر صور',
      avatar: '19.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 20,
      name: 'سلطان الشمري',
      role: 'محرر صور',
      avatar: '20.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 21,
      name: 'سلطان الشمري',
      role: 'محرر صور',
      avatar: '21.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      id: 22,
      name: 'سلطان الشمري',
      role: 'محرر صور',
      avatar: '22.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  stats = [
    {
      icon: 'fa-solid fa-calendar-days',
      value: '15+',
      label: 'سنة خبرة',
    },
    {
      icon: 'fa-solid fa-users',
      value: '50+',
      label: 'مصور محترف',
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      value: '500+',
      label: 'طالب',
    },
    {
      icon: 'fa-solid fa-trophy',
      value: '+100',
      label: 'جائزة',
    },
  ];

  values = [
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'الإبداع',
      description: 'نؤمن بأن التصوير فن يحتاج إلى رؤية إبداعية فريدة لكل لحظة.',
      color: 'emerald',
    },
    {
      icon: 'fa-solid fa-graduation-cap',
      title: 'التعليم',
      description: 'نسعى لنشر المعرفة وتمكين المصورين من تطوير مهاراتهم باستمرار.',
      color: 'purple',
    },
    {
      icon: 'fa-solid fa-star',
      title: 'الجودة',
      description: 'نلتزم بتقديم محتوى عالي الجودة يساعد على تحقيق نتائج احترافية.',
      color: 'blue',
    },
    {
      icon: 'fa-solid fa-users-line',
      title: 'المجتمع',
      description: 'نبني مجتمعاً من المصورين المتحمسين لتبادل الخبرات والإلهام.',
      color: 'orange',
    },
  ];
}
