import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


    private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private toastr = inject(ToastrService);
  private platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  contactForm = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(3)]],
  });

  submitting = false;
  private endpoint = 'https://formspree.io/f/mzzyzbap';

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const payload = this.contactForm.value;

    this.http.post(this.endpoint, payload, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.submitting = false;
        this.contactForm.reset();
        if (this.isBrowser) {
          this.toastr.success('Your message has been sent successfully!', 'Success 🎉');
        }
      },
      error: () => {
        this.submitting = false;
        if (this.isBrowser) {
          this.toastr.error('Something went wrong. Please try again later.', 'Error');
        }
      }
    });
  }

}
