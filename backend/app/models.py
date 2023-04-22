from django.db import models
from django import utils

# Create your models here.
class Entry(models.Model):
  date = models.DateTimeField(default=utils.timezone.now)
  image_url = models.URLField(blank=True)
  title = models.CharField(max_length=120)
  content = models.TextField()

  def __str__(self) -> str:
    return self.title