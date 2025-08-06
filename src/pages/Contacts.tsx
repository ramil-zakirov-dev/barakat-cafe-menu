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
            Мы рады видеть вас в нашем заведении. Приходите и насладитесь аутентичной халяльной кухней в уютной атмосфере.
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
                  ул. Ленина, 26А<br />
                  г. Кукмор<br />
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
                  <a href="tel:+79870070809">+7 (987) 007-08-09</a>
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
                  <p className="text-foreground">Ежедневно: 09:00 - 22:00</p>
                  <p className="text-foreground">Пятница перерыв: 11:45 - 12:40</p>
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
                  <a href="mailto:info@barakat-cafe.ru">info@barakat-cafe.ru</a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-full">
            <Card className="h-full">
              <CardContent className="p-0 h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1110.1641322153964!2d50.893646!3d56.186004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415f43fb1c6305a1%3A0xf8e9f0cd246d1752!2z0JHQsNGA0LDQutCw0YIg0YXQsNC70Y_Qu9GMINC60LDRhNC1!5e0!3m2!1sru!2sru!4v1754502083780!5m2!1sru!2sru" loading="lazy" width="100%" height="100%" style={{ border: 0, borderRadius: "calc(var(--radius) - 2px)" }} allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                  Бесплатная парковка для гостей ресторана.
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