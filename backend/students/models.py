from django.db import models

# Create your models here.


class Student(models.Model):
    studentId = models.AutoField(primary_key=True)
    Firstname = models.CharField(max_length=100)
    Lastname = models.CharField(max_length=100)
    RegistrationNo = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Course = models.CharField(max_length=100)
    

#     class Meta:
#         verbose_name = _("")
#         verbose_name_plural = _("s")

#     def __str__(self):
#         return self.name

#     def get_absolute_url(self):
#         return reverse("_detail", kwargs={"pk": self.pk})
# )