import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы рады видеть вас в нашем ресторане. Приходите и насладитесь аутентичной халяльной кухней в уютной атмосфере.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  ул. Мира, 45<br />
                  г. Москва, 123456<br />
                  Россия
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  +7 (495) 123-45-67<br />
                  +7 (926) 123-45-67
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Время работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-foreground">Понедельник - Четверг: 10:00 - 22:00</p>
                  <p className="text-foreground">Пятница - Суббота: 10:00 - 23:00</p>
                  <p className="text-foreground">Воскресенье: 10:00 - 21:00</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  info@barakat-cafe.ru<br />
                  booking@barakat-cafe.ru
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-full">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.1964837889934!2d37.61756731572086!3d55.75582608055374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "calc(var(--radius) - 2px)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Баракат-кафе на карте"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <Card>
          <CardHeader>
            <CardTitle>Дополнительная информация</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Парковка</h4>
                <p className="text-muted-foreground">
                  Бесплатная парковка для гостей ресторана. Вход с торца здания.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Доступность</h4>
                <p className="text-muted-foreground">
                  Ресторан оборудован пандусом и имеет доступ для людей с ограниченными возможностями.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Wi-Fi</h4>
                <p className="text-muted-foreground">
                  Бесплатный высокоскоростной интернет для всех посетителей.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Оплата</h4>
                <p className="text-muted-foreground">
                  Принимаем наличные и банковские карты всех основных платежных систем.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;