"use strict";var darkButton=document.getElementById("dark"),lightButton=document.getElementById("light"),setDarkMode=function(){document.querySelector("body").classList="dark",localStorage.setItem("colorMode","dark")},setLightMode=function(){document.querySelector("body").classList="light",localStorage.setItem("colorMode","light")},colorModeFromLocalStorage=function(){return localStorage.getItem("colorMode")},colorModeFromPreferences=function(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"},loadAndUpdateColor=function(){"dark"==(colorModeFromLocalStorage()||colorModeFromPreferences())?darkButton.click():lightButton.click()},radioButtons=document.querySelectorAll(".toggle__wrapper input");radioButtons.forEach((function(e){e.addEventListener("click",(function(e){darkButton.checked?setDarkMode():setLightMode()}))})),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){e.matches?darkButton.click():lightButton.click()})),loadAndUpdateColor();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJkYXJrQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxpZ2h0QnV0dG9uIiwic2V0RGFya01vZGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldExpZ2h0TW9kZSIsImNvbG9yTW9kZUZyb21Mb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29sb3JNb2RlRnJvbVByZWZlcmVuY2VzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJsb2FkQW5kVXBkYXRlQ29sb3IiLCJjbGljayIsInJhZGlvQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2hlY2tlZCJdLCJtYXBwaW5ncyI6IkFBQUEsYUFXQSxJQUFNQSxXQUFhQyxTQUFTQyxlQUFlLFFBQ3JDQyxZQUFjRixTQUFTQyxlQUFlLFNBRXRDRSxZQUFjLFdBQ2xCSCxTQUFTSSxjQUFjLFFBQVFDLFVBQVksT0FDM0NDLGFBQWFDLFFBQVEsWUFBYSxPQUNwQyxFQUVNQyxhQUFlLFdBQ25CUixTQUFTSSxjQUFjLFFBQVFDLFVBQVksUUFDM0NDLGFBQWFDLFFBQVEsWUFBYSxRQUNwQyxFQUVNRSwwQkFBNEIsV0FDaEMsT0FBT0gsYUFBYUksUUFBUSxZQUM5QixFQUVNQyx5QkFBMkIsV0FDL0IsT0FBT0MsT0FBT0MsV0FBVyxnQ0FBZ0NDLFFBQzNDLE9BQ0EsT0FDaEIsRUFFTUMsbUJBQXFCLFdBR2hCLFNBREtOLDZCQUErQkUsNEJBQzNCWixXQUFXaUIsUUFBVWQsWUFBWWMsT0FDckQsRUFHTUMsYUFBZWpCLFNBQVNrQixpQkFBaUIsMEJBQy9DRCxhQUFhRSxTQUFRLFNBQUFDLEdBQ25CQSxFQUFPQyxpQkFBaUIsU0FBUyxTQUFDQyxHQUNoQ3ZCLFdBQVd3QixRQUFVcEIsY0FBZ0JLLGNBQ3ZDLEdBQ0YsSUFJQUksT0FBT0MsV0FBVyxnQ0FDWFEsaUJBQWlCLFVBQVUsU0FBQ0MsR0FDM0JBLEVBQU1SLFFBQVVmLFdBQVdpQixRQUFVZCxZQUFZYyxPQUNuRCxJQUdORCIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuVGhlIGZpcnN0IHRpbWUgdGhlIHBhZ2UgaXMgbG9hZGVkLCB0aGUgY29sb3IgbW9kZSBzZXQgb24gdGhlIHByZWZlcmVuY2UgXHJcbmlzIHVzZWQgYW5kIHNldCBhcyAnZGVmYXVsdCcgaW4gdGhlIGxvY2FsIHN0b3JhZ2UuIFxyXG5DaGFuZ2luZyB0aGUgZGVmYXVsdCBwcmVmZXJlbmNlcyB3b3JrcyB0aGUgc2FtZSB3YXkgYXMgY2hhbmdpbmcgdGhlIFxyXG5jb2xvciBtb2RlIHVzaW5nIHRoZSBidXR0b25zLCBpZiB0aGUgcGFnZSBpcyBsb2FkZWQuXHJcbldoZW4gdGhlIHBhZ2UgaXMgcmVsb2FkZWQsIHdoYXRldmVyIGlzIHRoZSB2YWx1ZSBzZXQgb24gdGhlIGxvY2FsIHN0b3JhZ2VcclxuaGFzIHByZWNlZGVuY2Ugb3ZlciB0aGUgdmFsdWVzIGluIHRoZSBwcmVmZXJlbmNlLiBJZiB0aGUgcHJlZmVyZW5jZVxyXG5jaGFuZ2VkIGFmdGVyIHRoZSBwYWdlIHdhcyB2aXNpdGVkIC0gYW5kIHRoZSBwYWdlIGlzIG5vdCBsb2FkZWQgLSBcclxudGhlIGxhc3QgdmFsdWUgc2F2ZWQgb24gdGhlIGxvY2FsIHN0b3JhZ2UgaXMgbG9hZGVkLiBcclxuKi9cclxuXHJcbmNvbnN0IGRhcmtCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyaycpO1xyXG5jb25zdCBsaWdodEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaWdodCcpO1xyXG5cclxuY29uc3Qgc2V0RGFya01vZGUgPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdCA9ICdkYXJrJztcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JNb2RlJywgJ2RhcmsnKTtcclxufTtcclxuXHJcbmNvbnN0IHNldExpZ2h0TW9kZSA9ICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0ID0gJ2xpZ2h0JztcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3JNb2RlJywgJ2xpZ2h0Jyk7XHJcbn07XHJcblxyXG5jb25zdCBjb2xvck1vZGVGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3JNb2RlJyk7XHJcbn07XHJcblxyXG5jb25zdCBjb2xvck1vZGVGcm9tUHJlZmVyZW5jZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyBcclxuICAgICAgICAgICAgICA/ICdkYXJrJ1xyXG4gICAgICAgICAgICAgIDogJ2xpZ2h0JyAvLyBJZiBwcmVmZXJlbmNlIGlzIHNldCBvciBkb2VzIG5vdCBtYXRjaCBhbnl0aGluZyAobGlnaHQgaXMgZGVmYXVsdClcclxufTtcclxuXHJcbmNvbnN0IGxvYWRBbmRVcGRhdGVDb2xvciA9ICgpID0+IHtcclxuICAvLyBsb2NhbCBzdG9yYWdlIGhhcyBwcmVjZW5kZW5jZSBvdmVyIHRoZSBwcmVmZXJzLWNvbG9yLXNjaGVtZVxyXG4gIGNvbnN0IGNvbG9yID0gY29sb3JNb2RlRnJvbUxvY2FsU3RvcmFnZSgpIHx8IGNvbG9yTW9kZUZyb21QcmVmZXJlbmNlcygpO1xyXG4gIGNvbG9yID09ICdkYXJrJyA/IGRhcmtCdXR0b24uY2xpY2soKSA6IGxpZ2h0QnV0dG9uLmNsaWNrKCk7XHJcbn07XHJcblxyXG4vLyB3aGVuIHRoZSBpbnB1dHMgYXJlIGNsaWNrZWQsIGNoZWNrIHdoaWNoIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkIGFuZCBjaGFuZ2UgdGhlIGNvbG9yXHJcbmNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2dnbGVfX3dyYXBwZXIgaW5wdXQnKTtcclxucmFkaW9CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGRhcmtCdXR0b24uY2hlY2tlZCA/IHNldERhcmtNb2RlKCkgOiBzZXRMaWdodE1vZGUoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG4vLyB3aGVuIHRoZSBwcmVmZXJzLWNvbG9yLXNjaGVtZSBjaGFuZ2VzLCB0aGlzIGV2ZW50IHdpbGwgYmUgZW1pdHRlZFxyXG4vLyBldmVudCByZWZsZWN0cyB0aGUgbWVkaWEgcXVlcnksIGlmIGl0IG1hdGNoZXMsIHRoZSBuZXcgY29sb3IgaXMgZGFyaywgZWxzZSBpdCBpcyBsaWdodFxyXG53aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5tYXRjaGVzID8gZGFya0J1dHRvbi5jbGljaygpIDogbGlnaHRCdXR0b24uY2xpY2soKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4vLyBMb2FkIHRoZSByaWdodCBjb2xvciBvbiBzdGFydHVwIC0gbG9jYWxTdG9yYWdlIGhhcyBwcmVjZWRlbmNlXHJcbmxvYWRBbmRVcGRhdGVDb2xvcigpOyJdfQ==