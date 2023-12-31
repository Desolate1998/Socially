﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Application.Utils;

public static class Mapper
{
    public static TDestination Map<TDestination>(object source) where TDestination : class
    {
        TDestination instance = Activator.CreateInstance(typeof(TDestination)) as TDestination ?? throw new NullReferenceException("Invalid source object to map");
        ICollection<PropertyInfo> instanceProperties = instance.GetType().GetProperties();
        foreach (var item in source.GetType().GetProperties())
        {
            if (instanceProperties.Where(x => x.Name == item.Name).Any())
            {
                PropertyInfo prop = instance.GetType().GetProperty(item.Name) ?? throw new NullReferenceException("Invalid property");
                prop.SetValue(instance, item.GetValue(source), null);
            }
        }
        return instance;
    }
}
